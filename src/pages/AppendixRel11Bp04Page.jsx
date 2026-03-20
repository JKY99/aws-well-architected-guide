import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP04 — 복구 중에는 컨트롤 플레인이 아닌 데이터 플레인 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        리소스가 손상된 상태에 진입하면 손상된 리소스에서 정상 리소스로 트래픽을 이동하여
        자동 또는 수동으로 복구합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        리소스가 손상된 상태에 진입하면 손상된 리소스에서 정상 리소스로 트래픽을 이동하여
        자동 또는 수동으로 복구합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>DNS 레코드 변경에 의존하여 트래픽 재라우팅</li>
        <li>불충분하게 프로비저닝된 리소스로 인해 손상된 구성 요소를 교체하기 위한 컨트롤 플레인 스케일링 작업에 의존</li>
        <li>모든 범주의 장애를 해결하기 위해 광범위한 멀티 서비스, 멀티 API 컨트롤 플레인 작업에 의존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동화된 복구의 성공률 향상</li>
        <li>평균 복구 시간(MTTR) 단축</li>
        <li>워크로드 가용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>컨트롤 플레인은 CRUDL 작업(생성, 읽기, 설명, 업데이트, 삭제, 목록)을 위한 관리 API이며, 데이터 플레인은 일상적인 서비스 트래픽과 쿼리를 처리</li>
        <li>컨트롤 플레인 작업 예시: 새 컴퓨팅 인스턴스 시작, 블록 스토리지 생성, Route 53 레코드 변경, 로드 밸런서/API 게이트웨이/DynamoDB 테이블 생성 또는 업데이트</li>
        <li>데이터 플레인 작업 예시: 정상 리소스 간 트래픽 이동, 기존 리소스에 대한 쿼리/요청 실행, Route 53 DNS 쿼리 응답, ARC 트래픽 전환, Lambda 함수 실행, DynamoDB 데이터 접근</li>
        <li>각 워크로드 평가: 장애 조치 런북, 고가용성 설계, 자동 복구 설계 검토</li>
        <li>컨트롤 플레인 작업을 데이터 플레인 작업으로 전환: Auto Scaling(CP) → 사전 스케일된 EC2 리소스(DP), EC2 인스턴스 스케일링(CP) → Lambda 스케일링(DP), Route 53 레코드 변경(CP) → Amazon Application Recovery Controller(DP)</li>
        <li>정적 안정성 설계: Auto Scaling 그룹을 트리거하는 대신 사전 스케일된 EC2 리소스 사용, 새 노드 추가 대신 Kubernetes 노드 초과 프로비저닝(파드 추가는 데이터 플레인)</li>
        <li>Route 53 DNS 레코드 변경 대신 Amazon Application Recovery Controller를 사용하여 DR 및 장애 조치 메커니즘 구현(Route 53 컨트롤 플레인은 SLA 미적용, 단일 리전에 위치)</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Application Recovery Controller (ARC) (데이터 플레인 기반 트래픽 전환)</li>
        <li>Elastic Load Balancing (데이터 플레인 트래픽 라우팅)</li>
        <li>AWS Lambda (데이터 플레인 실행)</li>
        <li>Amazon DynamoDB (데이터 플레인 데이터 접근)</li>
        <li>Amazon Route 53 (DNS 쿼리는 데이터 플레인, 레코드 변경은 컨트롤 플레인)</li>
        <li>Amazon CloudWatch, AWS X-Ray (모니터링 및 추적)</li>
      </ul>
      <PageNav />
    </article>
  );
}
