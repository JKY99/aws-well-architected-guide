import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP06 — 가능한 한 시스템을 무상태로 만들기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        서로 다른 클라이언트 요청 사이에서 디스크 및 메모리에 로컬로 저장된 데이터에 의존성이
        없도록 상태를 필요로 하지 않거나 상태를 외부로 오프로드하도록 시스템을 설계해야 합니다.
        이를 통해 서버를 가용성 영향 없이 자유롭게 교체할 수 있어 수평 확장 및 장애 복원력이 활성화됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        서로 다른 클라이언트 요청 사이에서 디스크 및 메모리에 로컬로 저장된 데이터에 의존성이 없도록 시스템을 설계합니다.
        서버를 가용성 영향 없이 자유롭게 교체할 수 있어 수평 확장 및 장애 복원력이 활성화됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서버에 로컬로 세션 정보를 저장하는 애플리케이션</li>
        <li>요청 간 디스크 및 메모리의 로컬로 저장된 데이터에 의존하는 시스템</li>
        <li>사용자 데이터를 애플리케이션 로직과 결합하는 설계</li>
        <li>상태 의존성으로 인해 수평 확장이 불가능한 아키텍처</li>
        <li>특정 서버 인스턴스가 사용자 세션을 처리해야 하는 애플리케이션</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수평 확장: 변동하는 트래픽과 수요에 따라 스케일 업 또는 다운 적응성</li>
        <li>내결함성: 개별 노드 장애에 대한 내재적 복원력</li>
        <li>서버 교체: 가용성 영향 없이 서버 자유롭게 교체 가능</li>
        <li>분산 부하: 사용 가능한 모든 컴퓨팅 리소스가 모든 요청 처리 가능</li>
        <li>독립적 구성 요소 확장: 다양한 워크로드 수요를 충족하기 위해 각 구성 요소를 독립적으로 확장</li>
        <li>서버리스 호환성: AWS Lambda 및 AWS Fargate와 같은 서버리스 서비스 사용 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>상태를 유지하는 애플리케이션 구성 요소 파악 및 이해</li>
        <li>애플리케이션 코드에서 사용자 데이터 분리: 핵심 애플리케이션 로직에서 사용자 데이터 분리 및 관리</li>
        <li>세션 데이터를 외부 스토리지 솔루션으로 오프로드</li>
        <li>상태 및 사용자 데이터 지속성 요구 사항을 파악한 후 무상태 아키텍처 설계</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Cognito (자격 증명 풀, 사용자 풀)</li>
        <li>AWS Secrets Manager (안전한 중앙 집중식 비밀 저장소)</li>
        <li>Amazon S3 (대용량 비구조적 데이터)</li>
        <li>Amazon DynamoDB (사용자 프로필 및 관계형 데이터)</li>
        <li>Amazon ElastiCache (세션 데이터 오프로드)</li>
        <li>Amazon MemoryDB</li>
        <li>AWS Lambda, AWS Fargate (서버리스 컴퓨팅)</li>
      </ul>
      <PageNav />
    </article>
  );
}
