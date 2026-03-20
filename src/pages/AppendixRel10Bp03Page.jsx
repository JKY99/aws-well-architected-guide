import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP03 — 벌크헤드 아키텍처를 사용하여 영향 범위 제한</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드의 여러 격리된 인스턴스(셀)를 사용하는 셀 기반 아키텍처를 구현합니다.
        각 셀은 독립적이며 다른 셀과 상태를 공유하지 않고, 전체 워크로드 요청의 일부를 처리합니다.
        하나의 셀에서 장애가 발생하면 해당 셀과 그 요청에만 영향을 미칩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        10개의 셀로 100개의 요청을 처리하는 워크로드의 경우, 하나의 셀 장애가 해당 셀에만 영향을 미쳐
        90%의 요청은 정상적으로 처리됩니다. 각 셀은 독립적이며 라우터 계층을 제외한 다른 셀과 상태를 공유하지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>셀이 제한 없이 성장하도록 허용</li>
        <li>모든 셀에 동시에 코드 업데이트 또는 배포 적용</li>
        <li>라우터 계층을 제외한 셀 간 상태 또는 구성 요소 공유</li>
        <li>라우터 계층에 복잡한 비즈니스 또는 라우팅 로직 추가</li>
        <li>셀 간 상호 작용을 최소화하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 격리: 많은 일반적인 장애가 단일 셀 내에 격리됨</li>
        <li>포이즌 필 방지: 손상된 요청 또는 특정 장애 모드에 대한 복원력</li>
        <li>배포 안전성: 잘못된 소프트웨어 업데이트가 전체 워크로드가 아닌 하나의 셀에만 영향을 미침</li>
        <li>확장성: 기존 셀을 확장하는 대신 추가 셀을 추가하여 워크로드 성장</li>
        <li>격리하기 어려운 장애 유형에 대한 복원력 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>파티션 키 선택: 서비스의 특성에 맞게 설정(셀 간 상호 작용을 최소화하는 자연적 세분화). 예: 고객 ID, 리소스 ID</li>
        <li>영구 셀 매핑 유지: 업스트림 서비스가 리소스 수명 주기 동안 단일 셀과 상호 작용하도록 설정</li>
        <li>셀 간 상태 또는 구성 요소를 공유하지 않음(라우터 제외)</li>
        <li>라우터 계층 설계: 파티션 매핑 알고리즘(암호화 해시 + 모듈식 산술 등)을 사용하여 요청 분산, 단순하고 수평 확장 가능하게 유지</li>
        <li>셀 크기 관리: 철저한 테스트를 통해 최대 셀 크기를 정의하고 안전한 운영 마진 설정</li>
        <li>스태거드 배포: 모든 셀에 동시가 아닌 순차적으로 코드 배포</li>
        <li>멀티 AZ 또는 멀티 리전 전략과 결합하여 다양한 장애 도메인에 대한 계층화된 복원력 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling (셀별 독립 컴퓨팅 리소스)</li>
        <li>Amazon ECS/EKS (셀별 컨테이너 오케스트레이션)</li>
        <li>Amazon SQS (셀별 독립 메시지 큐)</li>
        <li>Amazon DynamoDB (셀별 독립 데이터 스토어)</li>
        <li>AWS Organizations (계정 단위의 강력한 셀 격리)</li>
        <li>Amazon Route 53 (셀 기반 라우팅)</li>
        <li>AWS Builders' Library: Workload isolation using shuffle-sharding</li>
        <li>AWS Builders' Library: Automating safe, hands-off deployment</li>
      </ul>
      <PageNav />
    </article>
  );
}
