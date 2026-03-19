import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP01 — 서비스 할당량 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        AWS 서비스에는 계정별, 리전별로 적용되는 서비스 할당량(소프트 제한 및 하드 제한)이 존재합니다.
        워크로드를 설계하기 전에 사용하는 모든 서비스의 할당량을 파악하고, 이를 아키텍처 설계에 반영해야 합니다.
        할당량을 인지하지 못하면 워크로드가 예기치 않게 중단되거나 확장에 실패할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드에서 사용하는 모든 AWS 서비스의 현재 할당량을 정기적으로 검토하고,
        예상 피크 트래픽 시나리오에서도 할당량 한도에 도달하지 않도록 충분한 여유를 유지합니다.
        할당량 정보는 운영 런북에 문서화하고 팀 내에 공유합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서비스 할당량을 확인하지 않고 아키텍처를 설계하는 경우</li>
        <li>초기 배포 시에만 할당량을 확인하고 이후 재검토하지 않는 경우</li>
        <li>프로덕션 배포 후 할당량 한도에 도달하여 장애가 발생하는 경우</li>
        <li>여러 리전에 걸쳐 서비스를 배포할 때 각 리전의 할당량을 별도로 확인하지 않는 경우</li>
        <li>AWS 서비스 약관 변경에 따른 할당량 변화를 추적하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예상치 못한 서비스 중단 예방</li>
        <li>성장 계획에 맞춘 사전 할당량 증가 요청 가능</li>
        <li>용량 계획 및 비용 최적화에 필요한 기반 마련</li>
        <li>멀티 리전 배포 시 균형 잡힌 용량 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Service Quotas 콘솔을 통해 현재 사용 중인 서비스의 할당량 목록을 확인합니다.</li>
        <li>AWS Trusted Advisor의 서비스 제한 확인 항목을 정기적으로 검토합니다.</li>
        <li>워크로드 아키텍처 문서에 각 서비스의 현재 할당량과 사용률을 기록합니다.</li>
        <li>피크 트래픽 시나리오를 정의하고, 해당 시나리오에서 필요한 리소스 수량을 계산합니다.</li>
        <li>AWS Well-Architected Tool을 사용하여 할당량 관련 위험을 평가합니다.</li>
        <li>새로운 AWS 서비스를 도입할 때마다 해당 서비스의 할당량 문서를 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas — 서비스 할당량 조회 및 증가 요청</li>
        <li>AWS Trusted Advisor — 서비스 한도 초과 위험 자동 감지</li>
        <li>AWS Well-Architected Tool — 아키텍처 위험 평가</li>
        <li>AWS CLI (service-quotas list-service-quotas) — 프로그래밍 방식으로 할당량 조회</li>
        <li>AWS 서비스별 공식 한도 문서 — 각 서비스의 기본값 및 최대값 확인</li>
      </ul>
      <PageNav />
    </article>
  );
}
