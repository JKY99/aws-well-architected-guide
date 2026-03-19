import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP04 — 컨테이너 기반 접근 방식 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>컨테이너를 활용하여 일관된 환경을 제공하고, 리소스 효율성을 높이며, 빠른 배포와 스케일링을 실현합니다.</p>
      <h2>원하는 결과</h2>
      <p>컨테이너화를 통해 높은 리소스 효율성과 빠른 배포/스케일링을 달성합니다. 컨테이너는 애플리케이션 환경의 일관성을 보장하고, 개발에서 프로덕션까지 동일한 동작을 보장합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>컨테이너 CPU/메모리 리소스 한도 미설정으로 리소스 경합</li>
        <li>단일 컨테이너에 너무 많은 역할 부여 (마이크로서비스 원칙 위반)</li>
        <li>컨테이너 이미지 최적화 없이 대용량 이미지 사용</li>
        <li>컨테이너 오케스트레이션 없이 수동 컨테이너 관리</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>동일 호스트에서 더 높은 밀도로 워크로드 실행</li>
        <li>환경 간 일관성으로 "내 환경에서는 동작함" 문제 해소</li>
        <li>빠른 시작 시간으로 신속한 스케일링</li>
        <li>불변 인프라(Immutable Infrastructure) 패턴 적용 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon ECS 또는 Amazon EKS로 컨테이너 오케스트레이션 구성</li>
        <li>AWS Fargate를 사용하여 서버리스 방식으로 컨테이너 실행</li>
        <li>Amazon ECR로 컨테이너 이미지를 안전하게 저장 및 관리</li>
        <li>컨테이너별 리소스 요청(Request)과 한도(Limit) 적절히 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ECS — 완전 관리형 컨테이너 오케스트레이션</li>
        <li>Amazon EKS — 관리형 Kubernetes 서비스</li>
        <li>AWS Fargate — 서버리스 컨테이너 컴퓨팅</li>
        <li>Amazon ECR — 완전 관리형 컨테이너 이미지 레지스트리</li>
      </ul>
      <PageNav />
    </article>
  );
}
