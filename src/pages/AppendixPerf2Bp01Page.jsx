import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP01 — 워크로드에 가장 적합한 컴퓨팅 옵션 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 특성(CPU 집약, 메모리 집약, I/O 집약 등)을 파악하고 이에 맞는 최적의 컴퓨팅 옵션(인스턴스, 컨테이너, 서버리스)을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 특성에 맞는 최적의 컴퓨팅 옵션을 선택하여 성능과 비용을 최적화합니다. 다양한 컴퓨팅 유형의 특성을 이해하고 워크로드에 가장 적합한 선택을 내립니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본 또는 범용 인스턴스 유형을 별도 평가 없이 사용</li>
        <li>성능 테스트 없이 컴퓨팅 옵션 선택</li>
        <li>과도한 리소스 프로비저닝으로 비용 낭비</li>
        <li>워크로드 특성(CPU 집약, 메모리 집약 등)을 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드에 최적화된 성능 달성</li>
        <li>적절한 컴퓨팅 선택으로 비용 절감</li>
        <li>워크로드 적합성 향상으로 안정성 개선</li>
        <li>지속적인 최적화 기반 마련</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Compute Optimizer를 활용하여 최적 컴퓨팅 옵션 파악</li>
        <li>범용(M), 컴퓨팅 최적화(C), 메모리 최적화(R), 스토리지 최적화(I) 등 다양한 인스턴스 패밀리 평가</li>
        <li>컨테이너, 서버리스 등 다양한 컴퓨팅 모델 검토</li>
        <li>Graviton 기반 인스턴스를 포함한 다양한 프로세서 아키텍처 평가</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 컴퓨팅 옵션 최적화 권고</li>
        <li>Amazon EC2 — 다양한 인스턴스 패밀리 제공</li>
        <li>Amazon ECS / EKS — 컨테이너 기반 컴퓨팅</li>
        <li>AWS Lambda — 서버리스 컴퓨팅 옵션</li>
      </ul>
      <PageNav />
    </article>
  );
}
